import { Injectable } from '@angular/core';
import { PROGRAMMES,ELIGIBILITES,REWARDSPROGRAMME, 
    TraitProgramLoyalityGenericModel,ParamEligibiliteGenericModel, 
    TraitProgramLoyalityRewardPaternServiceProductModel, PARAMPOINTTYPE,
     ParamTypePointModel, ParamProfileModel, PARAMPROFILE,
      trait_service_product_provider_membershipModel, TRAITMEMBERSHIP,
       new_tbl_param_product_serviceModel, PARAMPRODUITSERVICE, TraitServiceProductProviderMrkPlaceGenricModel, TRAITMAGASINS } from './mock_datas';

@Injectable()
export class Service {

    getAllProgrammes(): TraitProgramLoyalityGenericModel[] {
        return PROGRAMMES;
    }
     getAllEligibiltyProgramme(): ParamEligibiliteGenericModel[] {
        return ELIGIBILITES;
    }
    getAllRewardProgramme(): TraitProgramLoyalityRewardPaternServiceProductModel[]{
        return REWARDSPROGRAMME;
    }
    getAllTypePoint(): ParamTypePointModel[]{
        return PARAMPOINTTYPE;
    }
    getAllProfileProgramme():ParamProfileModel[]{
        return PARAMPROFILE;
    }
    
    getAllMembership():trait_service_product_provider_membershipModel[]{
        return TRAITMEMBERSHIP;
    }
    getAllMarketPlaceProgramme():TraitServiceProductProviderMrkPlaceGenricModel[]{
        return TRAITMAGASINS;
    }
    getAllProductsServices():new_tbl_param_product_serviceModel[]{
        return PARAMPRODUITSERVICE;
    }
}