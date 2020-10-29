import { Component, OnInit } from '@angular/core';
import { new_tbl_param_product_serviceModel, ParamProfileModel, ParamTypePointModel,
   TraitProgramLoyalityRewardPaternMrkPlaceModel, TraitServiceProductProviderMrkPlaceGenricModel,
    trait_program_loyality_palier_pts_service_product_pallier_prixModel, trait_program_loyality_service_product_paternModel,
      trait_service_product_provider_membershipModel } from '../mock_datas';
import { Service } from '../service';

@Component({
  selector: 'app-new-programme',
  templateUrl: './new-programme.component.html',
  styleUrls: ['./new-programme.component.scss'],
  providers: [Service]
})
export class NewProgrammeComponent implements OnInit {

list_type_point:ParamTypePointModel[]=[];
list_profile_programme:ParamProfileModel[]=[];
list_mrk_place:TraitServiceProductProviderMrkPlaceGenricModel[]=[];
list_trait_program_loyality_pts_service_product_achat_palier:trait_program_loyality_palier_pts_service_product_pallier_prixModel[]=[];
list_trait_program_loyality_pts_service_product_total_achat:trait_program_loyality_palier_pts_service_product_pallier_prixModel[]=[];
list_membership:trait_service_product_provider_membershipModel[]=[];
list_trait_program_loyality_pts_service_product:trait_program_loyality_service_product_paternModel[]=[];

filter_sexe: boolean=false;
//total sur l'achat
achat_min:number;
achat_max:number;
pts_granted:number;
editField: string;
error_achat_total:boolean=false;
//total par palier sur l'achat
palier:number;
pts_granted_palier:number;
//par produit
list_products_services_of_program: new_tbl_param_product_serviceModel[]=[];
selectionModes: string[] = ["multiple", "single"];
selectNodesRecursive: boolean = true;
product_nbre_pts_element_state:boolean=true;
product_nbre_pts_granted_state:boolean=true;
product_nbre_pts_element:number=1;
product_nbre_pts_granted:number=0;
btn_add_strategy_product_state:boolean=true;
btn_remove_strategy_product_state:boolean=true;
strategy_product_IDSelected :string = "";
strategy_product_lib_Selected :string = "";//only for demo

//par intervalle de produit
list_products_services_interval: new_tbl_param_product_serviceModel[]=[];
min_intervalle_prix:number=2000;
  max_intervalle_prix:number=80000;
  min_max_intervalle_prix:boolean=true;
  nbre_pts_granted_intervalle_prix:number=0;
  btn_new_intervalle_prix_state:boolean=true;
  btn_delete_intervalle_prix_state:boolean=true;
  list_products_services_interval_selected_tmp: new_tbl_param_product_serviceModel[]=[];
  list_products_services_interval_selected:trait_program_loyality_service_product_paternModel[]=[];
// magasin de recompense
list_trait_service_product_provider_mrk_place: TraitServiceProductProviderMrkPlaceGenricModel[] = [];
list_trait_program_loyality_reward_patern_mrk_place: TraitProgramLoyalityRewardPaternMrkPlaceModel[] = [];
  constructor(private service: Service) { }

  ngOnInit(): void {
  this.list_type_point = this.service.getAllTypePoint();
  this.list_profile_programme = this.service.getAllProfileProgramme();
  this.list_mrk_place = this.service.getAllMarketPlaceProgramme();
  this.list_trait_service_product_provider_mrk_place = this.service.getAllMarketPlaceProgramme();
  this.list_membership = this.service.getAllMembership();
  this.list_products_services_of_program = this.service.getAllProductsServices();
  this.list_products_services_interval = this.service.getAllProductsServices();
  }
  pointColumn_customizeText (cellInfo) {
    return cellInfo.value + " Pts";
  }
  changeValue( property: string, event: any) {
    this.editField = event.target.textContent;
  }
  updateAchatPalierList(id:number,property: string, event: any) {
    const editField = event.target.textContent;
    this.list_trait_program_loyality_pts_service_product_achat_palier[id][property] = editField;
  }
  updateAchatTotalList(id:number,property: string, event: any) {
    const editField = event.target.textContent;
    this.list_trait_program_loyality_pts_service_product_total_achat[id][property] = editField;
  }
  empty_form_total_achat(){
    this.achat_min = 0;
    this.achat_max = 0;
    this.pts_granted = 0;
  }
  empty_form_achat_palier(){
    this.palier = 0;
    this.pts_granted_palier = 0;
  }
  addTotalAchat(){
     if(this.achat_max > this.achat_min){
      
      let total_achat = new trait_program_loyality_palier_pts_service_product_pallier_prixModel();
      total_achat.Prix_min = this.achat_min;
      total_achat.Prix_max = this.achat_max;
      total_achat.nbre_pts_granted = this.pts_granted;
      this.list_trait_program_loyality_pts_service_product_total_achat.push(total_achat);
      this.empty_form_total_achat();
    }
    else{
      alert("Champs non remplis");
    }
    console.log(this.list_trait_program_loyality_pts_service_product_total_achat);
  }
  removeTotalAchat(id){
    this.list_trait_program_loyality_pts_service_product_total_achat.splice(id, 1);
  }
  addAchatPalier(){
    
    if(this.palier != 0 && this.pts_granted_palier != 0){
      
      let total_achat = new trait_program_loyality_palier_pts_service_product_pallier_prixModel();
      total_achat.Prix_max = this.palier;
      total_achat.nbre_pts_granted = this.pts_granted_palier;
      this.list_trait_program_loyality_pts_service_product_achat_palier.push(total_achat);
      this.empty_form_achat_palier();
    }
    else{
     alert("Champs non remplis");
    }
    console.log(this.list_trait_program_loyality_pts_service_product_achat_palier);
  }
  removeAchatPalier(id){
    this.list_trait_program_loyality_pts_service_product_achat_palier.splice(id, 1);
  }
//par produit
selectProductStrategy(e){
  this.strategy_product_IDSelected = e.itemData.prod_serv_ID;
  this.strategy_product_lib_Selected = e.itemData.prod_serv_lib;//only for demo
  this.product_nbre_pts_element_state = false;
  this.product_nbre_pts_granted_state = false;
  this.btn_add_strategy_product_state = false;
}
  check_strategy_service_product(){
 
    if (this.product_nbre_pts_element == null || this.product_nbre_pts_element == undefined || this.product_nbre_pts_element == 0) {
      
      alert("Champs quantite vide");
      return false;
    }
    if (this.product_nbre_pts_granted == null || this.product_nbre_pts_granted == undefined || this.product_nbre_pts_granted == 0) {
      
      alert("Champs point vide");
      return false;
    }
    if (this.strategy_product_IDSelected == "" || this.strategy_product_IDSelected == undefined || this.strategy_product_IDSelected == null) {
      alert("Aucun produit selectione");
      return false;
    }
    return true;
  }

  addPointProductStrategy(){
    
    if(this.check_strategy_service_product()){
      let trait_program_loyality_pts_service_product = new trait_program_loyality_service_product_paternModel();
      trait_program_loyality_pts_service_product.pgrm_loyal_serv_patern_min = this.product_nbre_pts_element;
      trait_program_loyality_pts_service_product.pgrm_loyal_serv_patern_val = this.product_nbre_pts_granted;
      trait_program_loyality_pts_service_product.srv_prod_prov_patern_ID = this.strategy_product_IDSelected;
      trait_program_loyality_pts_service_product.pgrm_loyal_serv_patern_type= this.strategy_product_lib_Selected;//only for demo
    //  just for demo 
    this.list_trait_program_loyality_pts_service_product.push(trait_program_loyality_pts_service_product);
    this.list_products_services_of_program = this.list_products_services_of_program.filter(
      ({ prod_serv_ID }) => prod_serv_ID !== this.strategy_product_IDSelected);
    }
  }

  //par intervalle de produit
  onValueChangedProdInterval(e) {

    let selectedProducts: any[] = [];
    this.list_products_services_interval.forEach((item, index) => {
        if (item.prod_serv_price >= e.value[0] && item.prod_serv_price <= e.value[1]) {
          selectedProducts.push(item);
        }
    });
    console.log(selectedProducts);
    this.list_products_services_interval = selectedProducts;
  }
  selectionChanged(e) {
    this.min_max_intervalle_prix = false;
    this.btn_new_intervalle_prix_state = false;
    this.btn_delete_intervalle_prix_state = true;
    
    console.log(e);
    let value = e.node;
    if (this.isServiceProduct(value)) {
      this.processServiceProduct({
        prod_serv_ID: value.key,
        prod_serv_lib: value.text,
        itemData: value.itemData,
        selected: value.selected,
        parent: value.parent  // category: value.parent
      });
    } else {
      value.items.forEach((product, index) => {
        this.processServiceProduct({
          prod_serv_ID: product.key,
          prod_serv_lib: product.text,
          itemData: product.itemData,
          selected: product.selected,
          parent: value.parent   //category: value.text
        });
      });
    }
  }
  isServiceProduct(data) {
    return !data.items.length;
  }
  
  processServiceProduct(service_product) {
    let itemIndex = -1;
    this.list_products_services_interval_selected_tmp.forEach((item, index) => {
      if (item.prod_serv_ID === service_product.prod_serv_ID) {
        itemIndex = index;
        return false;
      }
    });
    if (service_product.selected && itemIndex === -1) {
      this.list_products_services_interval_selected_tmp.push(service_product);
    } else if (!service_product.selected) {
      this.list_products_services_interval_selected_tmp.splice(itemIndex, 1);
    }
  }

  check_fields_interval_product(){
  
      if (this.nbre_pts_granted_intervalle_prix == undefined || this.nbre_pts_granted_intervalle_prix == 0) {
        alert("Points par intervalle de produit vide");
        return false;
      }
    if (this.list_products_services_interval_selected_tmp.length == 0 || this.list_products_services_interval_selected_tmp == []) {
      alert("Aucun intervalle de produit selectione");
      return false;
    }
    return true;
  }

  addPointIntervalProductStrategy(){
    if(this.check_fields_interval_product()){
      for (let i = 0; i < this.list_products_services_interval_selected_tmp.length; i++) {
        let item_to_send = new trait_program_loyality_service_product_paternModel();
        item_to_send.pgrm_loyal_serv_patern_ID = "";
        item_to_send.srv_prod_prov_patern_ID = this.list_products_services_interval_selected_tmp[i].prod_serv_ID;
        item_to_send.pgrm_loyal_serv_patern_val = this.nbre_pts_granted_intervalle_prix;
        item_to_send.pgrm_loyal_serv_patern_type  = this.list_products_services_interval_selected_tmp[i].prod_serv_lib;
        // this.list_products_services_interval_selected_to_send.push(item_to_send);
        this.list_products_services_interval_selected.push(item_to_send);
      }
      //send datas to server to save
    //  console.log(this.list_products_services_interval_selected_to_send);
    
    }   
      
    }

    selectProductIntervalStrategyToRemove(e){
      this.nbre_pts_granted_intervalle_prix = 0;
      this.min_max_intervalle_prix = true;
      this.btn_delete_intervalle_prix_state = false;
      this.btn_new_intervalle_prix_state = true;
      console.log("interval_to_remove");
      console.log(e);
      // this.list_products_services_interval_selected_to_delete = e.selectedRowsData;
    
    }

    // magasin de recompense
       //select market
       SelectionChangedAddMarketEndDate(e) {
        if (e.selectedRowKeys.length) {
            // feild the selected market place cover
        // this.removeMarketPlaceCoverState2 = true;
        // this.addMarketPlaceCoverState2 = false;
        // this.pgm_mag_limit_date_state = false;
            // feild the selected market place 
            // this.trait_program_loyality_reward_patern_mrk_place_selected = new trait_program_loyality_reward_patern_mrk_placeModel();
            // this.trait_program_loyality_reward_patern_mrk_place_selected.Rewrd_patern_pgm_mag_ID = "";
    
            // this.trait_program_loyality_reward_patern_mrk_place_selected.Rewrd_patern_pgm_mag_limit_date = e.selectedRowKeys[0]["Rewrd_patern_pgm_mag_limit_date"];
            // this.trait_program_loyality_reward_patern_mrk_place_selected.srv_prod_prov_mrk_place_ID = e.selectedRowKeys[0]["srv_prod_prov_mrk_place_ID"];
            // this.trait_program_loyality_reward_patern_mrk_place_selected.Rewrd_patern_pgm_ID = this.Rewrd_patern_pgm_ID;
        }
      }

  selectProfile(profile){
    console.log(profile);
  }
  selectMrkPlace(mrk_place){
    console.log(mrk_place);
  }

}
