import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ParamEligibiliteGenericModel, TraitProgramLoyalityRewardPaternServiceProductModel, TraitServiceProductProviderMrkPlaceGenricModel, trait_service_product_provider_membershipModel } from '../mock_datas';
import { Service } from '../service';

@Component({
  selector: 'app-programme-details',
  templateUrl: './programme-details.component.html',
  styleUrls: ['./programme-details.component.scss'],
  providers: [Service]
})
export class ProgrammeDetailsComponent implements OnInit {

  list_membership:trait_service_product_provider_membershipModel[]=[]; 
list_mrk_place:TraitServiceProductProviderMrkPlaceGenricModel[]=[];
  eligibilities:ParamEligibiliteGenericModel[]=[];
  list_all_rewards:TraitProgramLoyalityRewardPaternServiceProductModel[]=[];
  // programme1: Observable<TraitProgramLoyalityGenericModel>;
  tabsItems = [
    {
      id: 0, text: "Elibilite",
      icon: "user", template: "tab1"
    },
    {
      id: 1, text: "Regles",
      icon: "comment", template: "tab2"
    },
    {
      id: 2, text: "Recompenses",
      icon: "find", template: "tab3"
    },
    {
      id: 3, text: "Fournisseurs",
      icon: "user", template: "tab4"
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Service
  ) {
    
  }

  ngOnInit(): void {
    this.eligibilities = this.service.getAllEligibiltyProgramme();
    this.list_all_rewards = this.service.getAllRewardProgramme();
    this.list_mrk_place = this.service.getAllMarketPlaceProgramme();
  this.list_membership = this.service.getAllMembership();
    this.route.queryParamMap
      .subscribe((params) => {
        console.log(params);
      }
      );
     
  }
  currencyColumn_customizeText(cellInfo) {
    return cellInfo.value + " CFA";
  }
  pointsColumn_customizeText(cellInfo) {
    return cellInfo.value + " Pts";
  }
  percentColumn_customizeText (cellInfo) {
    return cellInfo.value + " %";
  }
  gotoHome() {
    // const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/home']);
  }
}
