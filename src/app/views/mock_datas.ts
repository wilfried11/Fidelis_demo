
export class TraitProgramLoyalityGenericModel {
  public pgrm_loyal_ID?: string;
  public pgrm_loyal_lib: string;
  public pgrm_loyal_lib_eng?: string;
  public pgrm_loyal_desc: string;
  public pgrm_loyal_desc_eng?: string;
  public pgrm_loyal_date_reg?: Date;
  public pgrm_loyal_date_deb: string;
  public pgrm_loyal_date_fin: string;
  public pgrm_loyal_duree?: number;
  public pgrm_loyal_code?: string;
  public pgrm_loyal_etat?: string;
  public pgrm_loyal_etat1?: string;
  public pgrm_loyal_type_ID?: string;
  public pgrm_loyal_type_lib: string;
  public pgrm_loyal_categ?: string;
  public srv_prod_prov_ID?: string;
  public srv_prod_prov_lib: string;
  public pgrm_loyal_img?: string;
  public srv_prod_prov_coal_ID?: string;
  public pgrm_loyal_hash?: string;
  public pgrm_loyal_par_ID?: string;
  public pgrm_loyal_users: number;
  public pgrm_loyal_like: number;

}
export class ParamEligibiliteGenericModel {
  public pgrm_param_ID?: string;
  public pgrm_loyal_prod_name?: string;
  public pgrm_loyal_membership?: string;
  public pgrm_loyal_prod_qte?: number;
  public pgrm_loyal_min: number;
  public pgrm_loyal_max: number;
  public pgrm_loyal_point: number;
}
export class TraitProgramLoyalityRewardPaternServiceProductModel {
  public Rewrd_patern_srv_prod_pgm_ID ?: string;
  public Rewrd_patern_pgm_ID ?: string;
  public reward_type_ID ?: string;
  public reward_type_lib ?: string;
  public srv_prod_prov_client_profile_ID ?: string;
  public Reward_patern_item_ID ?:string;
  public srv_prov_membership_categ ?: string;
  public Rewrd_patern_srv_prod_pgm_val ?: number;
  public Rewrd_patern_srv_prod_pgm_val1 ?: number;
  public Rewrd_patern_srv_prod_pgm_val2 ?: number;
  public srv_prod_prov_ID ?: string;
  public srv_prod_prov_pkg_ID ?: string;
  public categ_service_ID ?: string;
  public prod_serv_ID ?: string;
  public prod_serv_Head_ID ?: string;
  public prod_serv_lib: string;
  public Rewrd_patern_srv_prod_pgm_limit_qte ?: number;
  public Rewrd_patern_srv_prod_pgm_interval_jour_qte_max ?: number;
  public Rewrd_patern_srv_prod_pgm_interval_jour_qte ?: number;
  public Rewrd_patern_srv_prod_pgm_limit_montant ?: number;
  public Rewrd_patern_srv_prod_pgm_interval_jour_montant_max ?: number;
  public Rewrd_patern_srv_prod_pgm_interval_jour_montant ?: number;
  public Rewrd_patern_srv_prod_pgm_nbre_product_all ?: number;
  public Resultat_Out ?: string;
  public _has_error_out ?: number;
};

export class ParamTypePointModel {
  public pgrm_param_type_point_ID?: string;
  public pgrm_param_type_point_lib?: string;
  public pgrm_param_type_point_desc?: string;
  public Resultat_Out ?: string;
  public _has_error_out ?: number;
}

export class ParamProfileModel {
  public pgrm_param_profile_ID?: string;
  public pgrm_param_profile_lib?: string;
  public pgrm_param_profile_desc?: string;
  public Resultat_Out ?: string;
  public _has_error_out ?: number;
}

// export class trait_program_loyality_reward_patern_mrk_placeModel 
// {
// public Rewrd_patern_pgm_mag_ID : string ; 
// public Rewrd_patern_pgm_ID ?: string ; 
// public srv_prod_prov_mrk_place_ID ?: string ; 
// public srv_prod_prov_mrk_place_lib : string ;
// public srv_prod_prov_mrk_place_desc : string ; 
// public Rewrd_patern_pgm_mag_limit_date : string ; 
//   public Resultat_Out ?: string;
//   public _has_error_out ?: number;
//   }
  export class trait_program_loyality_palier_pts_service_product_pallier_prixModel 
  {
  public pgrm_loyal_pts_serv_prod_PalierPrix_ID : string ; 
  public pgrm_loyal_pts_serv_prod_ID : string ; 
  public srv_prov_membership_ID : string ; 
  public pgrm_loyal_pts_serv_prod_PalierPrix_Categ : string ; 
  public pgrm_loyal_pts_serv_prod_PalierPrix_Group : string ; 
  public pgrm_loyal_ID : string ; 
  public Prix_min : number ; 
  public Prix_max : number ; 
  public nbre_pts_granted : number ; 
  public nbre_pts_others : number ; 
  public pgrm_loyal_pts_serv_prod_PalierPrix_Elt_ID : string ; 
    public Resultat_Out : string;
    public _has_error_out : number;
    }
    export class trait_service_product_provider_membershipModel 
     {
     public srv_prov_membership_ID : string ; 
     public srv_prod_prov_ID ?: string ; 
     public membership_ID ?: string ; 
     public srv_prov_membership_org ?: number ; 
     public srv_prov_membership_categ : string ; 
     public srv_prov_membership_elt_ID ?: string ; 
     public srv_prov_membership_elt_type ?: string ; 
       public Resultat_Out ?: string;
       public _has_error_out ?: number;
       }
       export class trait_program_loyality_service_product_paternModel 
     {
     public pgrm_loyal_serv_patern_ID : string ; 
     public pgrm_loyal_ID : string ; 
     public srv_prod_prov_patern_ID : string ; //product
     public pgrm_loyal_serv_patern_type : string ; 
     public pgrm_loyal_serv_patern_min : number ; 
     public pgrm_loyal_serv_patern_max : number ; 
     public pgrm_loyal_serv_patern_val : number ; 
       public Resultat_Out : string;
       public _has_error_out : number;
       }
       export class new_tbl_param_product_serviceModel{
        public prod_serv_ID:string;
        public categ_service_ID:string;
        public categ_service_par_ID ?: string; 
        public categ_service_lib ?: string ;
        public quantite?:number;
        public pourcentage_reduction?:number;
        public montant_reduction?:number;
        public prod_serv_price?: number;
        public prod_serv_lib: string;
        public prod_serv_lib_eng?: string;
        public prod_serv_desc?: string;
        public prod_serv_desc_eng?:string;
        public prod_serv_code?:string;
        public prod_serv_img?:string;
        public prod_serv_Elt?:string;
        public Resultat_Out ?: string;
        public _has_error_out ?: number;
    }
    export class TraitProgramLoyalityRewardPaternMrkPlaceModel 
    {
    public Rewrd_patern_pgm_mag_ID : string ; 
    public Rewrd_patern_pgm_ID : string ; 
    public srv_prod_prov_mrk_place_ID : string ; 
    public srv_prod_prov_mrk_place_name : string ; 
    public srv_prod_prov_mrk_place_type_ID : string ;
    public Rewrd_patern_pgm_mag_limit_date : Date ; 
    public Resultat_Out : string;
    public _has_error_out : number;
      }
      export class TraitServiceProductProviderMrkPlaceGenricModel 
      {
      public srv_prod_prov_mrk_place_ID : string ; 
      public srv_prod_prov_ID ?: string ; 
      public srv_prod_prov_mrk_place_name : string ; 
      public srv_prod_prov_mrk_place_name_eng ?: string ; 
      public srv_prod_prov_mrk_place_co_x ?: string ; 
      public srv_prod_prov_mrk_place_co_y ?: string ; 
      public srv_prod_prov_mrk_place_co_z ?: string ; 
      public address_all_ID ?: string ; 
      public srv_prod_prov_mrk_place_type_ID ?: string ;
      public srv_prod_prov_mrk_place_type_lib: string; 
      public Resultat_Out ?: string;
      public _has_error_out ?: number;
        } 
        export const TRAITMAGASINS: TraitServiceProductProviderMrkPlaceGenricModel[]=[
          {
            srv_prod_prov_mrk_place_ID: "CHECK0000-0002020100810",
            srv_prod_prov_mrk_place_name: "Santa Lucia",
            srv_prod_prov_mrk_place_type_lib: "Complexe et Supermache"
          },
          {
            srv_prod_prov_mrk_place_ID: "CHECK0000-0002020100811",
            srv_prod_prov_mrk_place_name: "Super U",
            srv_prod_prov_mrk_place_type_lib: "Supermarche"
          },
          {
            srv_prod_prov_mrk_place_ID: "CHECK0000-0002020100812",
            srv_prod_prov_mrk_place_name: "Buca Voyage",
            srv_prod_prov_mrk_place_type_lib: "Agence de voyage"
          },
          {
            srv_prod_prov_mrk_place_ID: "CHECK0000-0002020100813",
            srv_prod_prov_mrk_place_name: "Orange CM",
            srv_prod_prov_mrk_place_type_lib: "Operateur de telephonie mobile au Cameroun"
          }
        ];   
        
        
    export const PARAMPRODUITSERVICE: new_tbl_param_product_serviceModel[]=[
      {
        prod_serv_ID: "00000000000001-2020-TICK",
        categ_service_ID: "0",
        prod_serv_price: 0,
        prod_serv_lib:"Produits & Services"
      },
      {
        prod_serv_ID: "00000000000002-2020-TICK",
        categ_service_ID: "00000000000001-2020-TICK",
        prod_serv_price: 2500,
        prod_serv_lib:"Céréales"
      },
      {
        prod_serv_ID: "00000000000003-2020-TICK",
        categ_service_ID: "00000000000001-2020-TICK",
        prod_serv_price: 5000,
        prod_serv_lib:"Transport"
      },
      {
        prod_serv_ID: "00000000000004-2020-TICK",
        categ_service_ID: "00000000000001-2020-TICK",
        prod_serv_price: 15000,
        prod_serv_lib:"Paiement de facture"
      },
      {
        prod_serv_ID: "00000000000005-2020-TICK",
        categ_service_ID: "00000000000002-2020-TICK",
        prod_serv_price: 2500,
         
        prod_serv_lib:"Flocons d'avoine"
      },
      {
        prod_serv_ID: "00000000000006-2020-TICK",
        categ_service_ID: "00000000000002-2020-TICK",
        prod_serv_price: 3500,
         
        prod_serv_lib:"Cereales froide"
      },
      {
        prod_serv_ID: "00000000000007-2020-TICK",
        categ_service_ID: "00000000000002-2020-TICK",
        prod_serv_price: 4500,
         
        prod_serv_lib:"Granola"
      },
      {
        prod_serv_ID: "00000000000008-2020-TICK",
        categ_service_ID: "00000000000003-2020-TICK",
        prod_serv_price: 5000,
         
        prod_serv_lib:"Terrestre"
      },
      {
        prod_serv_ID: "00000000000009-2020-TICK",
        categ_service_ID: "00000000000003-2020-TICK",
        prod_serv_price: 80000,
         
        prod_serv_lib:"Aerien"
      },
      {
        prod_serv_ID: "00000000000010-2020-TICK",
        categ_service_ID: "00000000000008-2020-TICK",
        prod_serv_price: 5000,
         
        prod_serv_lib:"Douala-Yaounde"
      },
      {
        prod_serv_ID: "00000000000011-2020-TICK",
        categ_service_ID: "00000000000009-2020-TICK",
        prod_serv_price: 4500,
         
        prod_serv_lib:"Yaounde-Douala"
      },
      {
        prod_serv_ID: "00000000000012-2020-TICK",
        categ_service_ID: "00000000000004-2020-TICK",
        prod_serv_price: 4500,
         
        prod_serv_lib:"Eaux"
      },
      {
        prod_serv_ID: "00000000000013-2020-TICK",
        categ_service_ID: "00000000000004-2020-TICK",
        prod_serv_price: 8500,
         
        prod_serv_lib:"Electricite"
      },
      {
        prod_serv_ID: "00000000000014-2020-TICK",
        categ_service_ID: "00000000000004-2020-TICK",
        prod_serv_price: 10000,
         
        prod_serv_lib:"Internet"
      },
      {
        prod_serv_ID: "00000000000015-2020-TICK",
        categ_service_ID: "00000000000006-2020-TICK",
        prod_serv_price: 4500,
         
        prod_serv_lib:"Coco pops 450g"
      },
      {
        prod_serv_ID: "00000000000016-2020-TICK",
        categ_service_ID: "00000000000006-2020-TICK",
        prod_serv_price: 3500,
         
        prod_serv_lib:"Cornflak"
      }
    ];
       export const TRAITMEMBERSHIP: trait_service_product_provider_membershipModel[]=[
        {
          srv_prov_membership_ID: "CHECK0000-0002020100810",
          srv_prov_membership_categ: "VIP"
        },
        {
          srv_prov_membership_ID: "CHECK0000-0002020100811",
          srv_prov_membership_categ: "Standard"
        },
        {
          srv_prov_membership_ID: "CHECK0000-0002020100812",
          srv_prov_membership_categ: "Premium"
        },
        {
          srv_prov_membership_ID: "CHECK0000-0002020100813",
          srv_prov_membership_categ: "Gold"
        }
      ];
  // export const TRAITMAGASINREWARD: trait_program_loyality_reward_patern_mrk_placeModel[]=[
  //   {
  //     Rewrd_patern_pgm_mag_ID: "CHECK0000-0002020100810",
  //     srv_prod_prov_mrk_place_lib: "Santa Lucia",
  //     srv_prod_prov_mrk_place_desc: "Complexe et Supermache",
  //     Rewrd_patern_pgm_mag_limit_date: "12/12/2020"
  //   },
  //   {
  //     Rewrd_patern_pgm_mag_ID: "CHECK0000-0002020100811",
  //     srv_prod_prov_mrk_place_lib: "Super U",
  //     srv_prod_prov_mrk_place_desc: "Supermarche",
  //     Rewrd_patern_pgm_mag_limit_date: "14/12/2020"
  //   },
  //   {
  //     Rewrd_patern_pgm_mag_ID: "CHECK0000-0002020100812",
  //     srv_prod_prov_mrk_place_lib: "Buca Voyage",
  //     srv_prod_prov_mrk_place_desc: "Agence de voyage",
  //     Rewrd_patern_pgm_mag_limit_date: "25/12/2020"
  //   },
  //   {
  //     Rewrd_patern_pgm_mag_ID: "CHECK0000-0002020100813",
  //     srv_prod_prov_mrk_place_lib: "Orange CM",
  //     srv_prod_prov_mrk_place_desc: "Operateur de telephonie mobile au Cameroun",
  //     Rewrd_patern_pgm_mag_limit_date: "31/12/2020"
  //   }
  // ];
export const PARAMPROFILE: ParamProfileModel[]=[
  {
    pgrm_param_profile_ID: "CHECK0000-0002020100810",
    pgrm_param_profile_lib: "Jeunes Douala",
    pgrm_param_profile_desc: "Personnes des deux sexes age entre 18 et 40 ans vivant a Douala"
  },
  {
    pgrm_param_profile_ID: "CHECK0000-0002020100811",
    pgrm_param_profile_lib: "Hommes de Bafoussam",
    pgrm_param_profile_desc: "Personnes de sexe masculin viavant a Bafoussam"
  },
  {
    pgrm_param_profile_ID: "CHECK0000-0002020100812",
    pgrm_param_profile_lib: "Refugies du NOSO",
    pgrm_param_profile_desc: "Personnes des deux sexes venant des regions de tensions Nord-Ouest et Sud-Ouest"
  },
  {
    pgrm_param_profile_ID: "CHECK0000-0002020100813",
    pgrm_param_profile_lib: "Femmes de Yaounde",
    pgrm_param_profile_desc: "Personnes de sexe feminin viavant a Bafoussam"
  },
  {
    pgrm_param_profile_ID: "CHECK0000-0002020100814",
    pgrm_param_profile_lib: "Deplacement",
    pgrm_param_profile_desc: "3 voyages aller et retour"
  },
  {
    pgrm_param_profile_ID: "CHECK0000-0002020100815",
    pgrm_param_profile_lib: "Forfait",
    pgrm_param_profile_desc: "Recharge de credit 2000CFA par semaine"
  }
];

export const PARAMPOINTTYPE: ParamTypePointModel[]=[
  {
    pgrm_param_type_point_ID: "CHECK0000-0002020100810",
    pgrm_param_type_point_lib: "Sur l'achat total",
    pgrm_param_type_point_desc: ""
  },
  {
    pgrm_param_type_point_ID: "CHECK0000-0002020100811",
    pgrm_param_type_point_lib: "Par palier sur l'achat",
    pgrm_param_type_point_desc: ""
  },
  {
    pgrm_param_type_point_ID: "CHECK0000-0002020100812",
    pgrm_param_type_point_lib: "Par produit/service",
    pgrm_param_type_point_desc: ""
  },
  {
    pgrm_param_type_point_ID: "CHECK0000-0002020100813",
    pgrm_param_type_point_lib: "Par unite de produit/service",
    pgrm_param_type_point_desc: ""
  }
];
export const REWARDSPROGRAMME: TraitProgramLoyalityRewardPaternServiceProductModel[] = [
  {
    Rewrd_patern_srv_prod_pgm_ID: "CHECK0000-0002020100810",
    reward_type_lib: "Reduction",
    srv_prov_membership_categ: "Standart",
    Rewrd_patern_srv_prod_pgm_val1: 5,
    Rewrd_patern_srv_prod_pgm_val: 300,
    Rewrd_patern_srv_prod_pgm_limit_montant: 0,
    Rewrd_patern_srv_prod_pgm_limit_qte: 0,
    prod_serv_lib: "Mixeurs"
  },
  {
    Rewrd_patern_srv_prod_pgm_ID: "CHECK0000-0002020152810",
    reward_type_lib: "Gratuit",
    srv_prov_membership_categ: "Premium",
    Rewrd_patern_srv_prod_pgm_val1: 0,
    Rewrd_patern_srv_prod_pgm_val: 250,
    Rewrd_patern_srv_prod_pgm_limit_montant: 5000,
    Rewrd_patern_srv_prod_pgm_limit_qte: 2,
    prod_serv_lib: "Climatiseurs"
  },
  {
    Rewrd_patern_srv_prod_pgm_ID: "CHECK0000-0002020152815",
    reward_type_lib: "Mixte",
    srv_prov_membership_categ: "VIP",
    Rewrd_patern_srv_prod_pgm_val1: 10,
    Rewrd_patern_srv_prod_pgm_val: 300,
    Rewrd_patern_srv_prod_pgm_limit_montant: 15000,
    Rewrd_patern_srv_prod_pgm_limit_qte: 3,
    prod_serv_lib: "Refregirateurs"
  }
];
export const ELIGIBILITES: ParamEligibiliteGenericModel[] = [
  {
    pgrm_param_ID: "CHECK0000-0002020100810",
    pgrm_loyal_prod_name: "Ventilateur",
    pgrm_loyal_membership: "Standart",
    pgrm_loyal_prod_qte: 3,
    pgrm_loyal_min: 15000,
    pgrm_loyal_max: 25000,
    pgrm_loyal_point: 5
  },
  {
    pgrm_param_ID: "CHECK0000-0002020152810",
    pgrm_loyal_prod_name: "Ciment",
    pgrm_loyal_membership: "Premium",
    pgrm_loyal_prod_qte: 5,
    pgrm_loyal_min: 25050,
    pgrm_loyal_max: 50000,
    pgrm_loyal_point: 7
  },
  {
    pgrm_param_ID: "CHECK0000-0002020152815",
    pgrm_loyal_prod_name: "Refregirateur",
    pgrm_loyal_membership: "VIP",
    pgrm_loyal_prod_qte: 2,
    pgrm_loyal_min: 60050,
    pgrm_loyal_max: 150000,
    pgrm_loyal_point: 12
  }
];
export const PROGRAMMES: TraitProgramLoyalityGenericModel[] = [
  {
    pgrm_loyal_ID: "CHECK0000-0002020100810",
    pgrm_loyal_lib: 'Yamo',
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon,which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '12/11/2020',
    pgrm_loyal_date_fin: '12/12/2020',
    pgrm_loyal_type_lib: 'Jeux',
    srv_prod_prov_lib: 'MTN',
    pgrm_loyal_users: 15,
    pgrm_loyal_like: 25,
    pgrm_loyal_img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100811",
    pgrm_loyal_lib: 'Speciale Rentree',
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '10/10/2020',
    pgrm_loyal_date_fin: '10/12/2020',
    pgrm_loyal_type_lib: 'Promo',
    srv_prod_prov_lib: 'Dovv',
    pgrm_loyal_users: 25,
    pgrm_loyal_like: 35,
    pgrm_loyal_img: 'https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100812",
    pgrm_loyal_lib: 'MTN Quiz',
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '12/10/2020',
    pgrm_loyal_date_fin: '12/12/2020',
    pgrm_loyal_type_lib: 'Jeux',
    srv_prod_prov_lib: 'MTN',
    pgrm_loyal_users: 32,
    pgrm_loyal_like: 45,
    pgrm_loyal_img: 'https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/answers/Loyalty-programs-can-improve.jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100813",
    pgrm_loyal_lib: 'Combi',
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '02/09/2020',
    pgrm_loyal_date_fin: '02/11/2020',
    pgrm_loyal_type_lib: 'Jeux',
    srv_prod_prov_lib: 'Orange',
    pgrm_loyal_users: 27,
    pgrm_loyal_like: 32,
    pgrm_loyal_img: 'https://www.insidemarketing.eu/cdn/wp-content/uploads/2019/04/Fidelity-card-620x350.jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100814",
    pgrm_loyal_lib: 'Jackpot',
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '12/09/2020',
    pgrm_loyal_date_fin: '12/11/2020',
    pgrm_loyal_type_lib: 'Jeux',
    srv_prod_prov_lib: 'PMUC',
    pgrm_loyal_users: 34,
    pgrm_loyal_like: 42,
    pgrm_loyal_img: 'https://www.bizneworleans.com/content/uploads/data-import/bd2f63bf/FidelityPowerwords_hrzntl2_prple.jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100815",
    pgrm_loyal_lib: 'Speciale Vacance',
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '10/10/2020',
    pgrm_loyal_date_fin: '10/12/2020',
    pgrm_loyal_type_lib: 'Promo',
    srv_prod_prov_lib: 'Generale Voyage',
    pgrm_loyal_users: 15,
    pgrm_loyal_like: 36,
    pgrm_loyal_img: 'https://icon-library.com/images/loyalty-card-icon/loyalty-card-icon-2.jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100816",
    pgrm_loyal_lib: 'Solde Promo',
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '05/09/2020',
    pgrm_loyal_date_fin: '05/11/2020',
    pgrm_loyal_type_lib: 'Promo',
    srv_prod_prov_lib: 'Santa Lucia',
    pgrm_loyal_users: 19,
    pgrm_loyal_like: 38,
    pgrm_loyal_img: 'https://icon-library.com/images/loyalty-card-icon/loyalty-card-icon-4.jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100817",
    pgrm_loyal_lib: "20 ans d'existance",
    pgrm_loyal_desc: 'MTN MEGA PROMO is the new SMS Quiz launched by MTN Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the MTNC subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which MTN Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '13/10/2020',
    pgrm_loyal_date_fin: '13/11/2020',
    pgrm_loyal_type_lib: 'Anniversaire',
    srv_prod_prov_lib: 'MTN',
    pgrm_loyal_users: 47,
    pgrm_loyal_like: 68,
    pgrm_loyal_img: 'https://icon-library.com/images/loyalty-card-icon/loyalty-card-icon-14.jpg'
  },
  {
    pgrm_loyal_ID: "CHECK0000-0002020100818",
    pgrm_loyal_lib: 'Chanllenge Quiz',
    pgrm_loyal_desc: 'Orange challenge is the new SMS Quiz launched by Orange Cameroon, which allows you to win up to 5,000,000 FCFA from 08 November to 08 December.To participate in the game, the Orange subscriber must send by SMS “OK” to 8799 or reply via any other subscription channel through which Orange Cameroon advertises the service following a message inviting the subscriber to subscribe.',

    pgrm_loyal_date_deb: '10/09/2020',
    pgrm_loyal_date_fin: '10/11/2020',
    pgrm_loyal_type_lib: 'Jeux',
    srv_prod_prov_lib: 'Orange',
    pgrm_loyal_users: 15,
    pgrm_loyal_like: 36,
    pgrm_loyal_img: 'https://icon-library.com/images/loyalty-card-icon/loyalty-card-icon-1.jpg'
  },
];