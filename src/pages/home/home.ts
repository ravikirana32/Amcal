import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public selected:any;
  public selectedData:any;
  public data:any;
  constructor(public navCtrl: NavController) {
  	
  	this.data=[
				{
					"category":"Books",
					"title":"Books",
					"group":"Media",
					"standardRate":13.00
				},
				{
					"category":"Movies",
					"title":"Movies",
					"group":"Media",
					"standardRate":9.00
				},
				{
					"category":"Music",
					"title":"Music",
					"group":"Media",
					"standardRate":8.00
				},
				{
					"category":"VideoGames",
					"title":"Video Games",
					"group":"Media",
					"standardRate":8.00
				},
				{
					"category":"VideoGamesConsoles",
					"title":"Video Games - Consoles",
					"group":"Media",
					"standardRate":5.50
				},
				{
					"category":"VideoGamesAccessories",
					"title":"Video Games - Accessories",
					"group":"Media",
					"standardRate":9.00
				},
				{
					"category":"EducationalSoftware",
					"title":"Educational Software",
					"group":"Media",
					"standardRate":12.00
				},
				{
					"category":"Non-EducationalSoftware",
					"title":"Non-Educational Software",
					"group":"Media",
					"standardRate":12.00
				},
				{
						"catagary":"PetFoodDog Food",
						"title":"Pet Food (Dog Food)",
						"rate":12.00,
						"group":"Consumables"
				},
				{
						"catagary":"PetFoodexceptDogFood",
						"title":"Pet Food (except Dog Food)",
						"rate":7.00,
						"group":"Consumables"
				},
				{
						"catagary":"PetAccessories",
						"title":"Pet Accessories",
						"rate":13.00,
						"group":"Consumables"
				},
				{
						"catagary":"BeautyProducts",
						"title":"Beauty Products",
						"rate":6.00,
						"group":"Consumables"
				},
				{
						"catagary":"BeautyFragrance",
						"title":"Beauty - Fragrance",
						"rate":14.00,
						"group":"Consumables"
				},
				{
						"catagary":"LuxuryBeauty",
						"title":"Luxury Beauty",
						"rate":14.00,
						"group":"Consumables"
				},
				{
						"catagary":"HealthPersonalCare",
						"title":"Health and Personal Care (HPC)",
						"rate":7.50,
						"group":"Consumables"
				},
				{
						"catagary":"HPCBodySupport",
						"title":"HPC - Body Support",
						"rate":11.00,
						"group":"Consumables"
				},
				{
						"catagary":"HPCMedicalEquipment",
						"title":"HPC - Medical Equipment",
						"rate":9.00,
						"group":"Consumables"
				},
				{
						"catagary":"HPCNutrition",
						"title":"HPC - Nutrition",
						"rate":9.00,
						"group":"Consumables"
				},
				{
						"catagary":"PersonalCareAppliances",
						"title":"Personal Care Appliances",
						"rate":7.00,
						"group":"Consumables"
				},
				{
						"catagary":"BabyProducts",
						"title":"Baby Products",
						"rate":6.00,
						"group":"Consumables"
				},
				{
						"catagary":"BabyNursingFeeding",
						"title":"Baby - Nursing and Feeding",
						"rate":7.50,
						"group":"Consumables"
				},
				{
						"catagary":"GroceryGourmet",
						"title":"Grocery and Gourmet",
						"rate":7.00,
						"group":"Consumables"
				},
				{
						"catagary":"Apparel",
						"title":"Apparel",
						"rate":19.50,
						"group":"Softline"
				},
				{
						"catagary":"ApparelAccessories",
						"title":"Apparel Accessories",
						"rate":20.00,
						"group":"Softline"
				},
				{
						"catagary":"ApparelInnerwear",
						"title":"Apparel - Innerwear",
						"rate":15.00,
						"group":"Softline"
				},
				{
						"catagary":"Apparel - Sleepwear",
						"title":"Apparel - Sleepwear)",
						"rate":19.50,
						"group":"Softline"
				},
				{
						"catagary":"Eyewear",
						"title":"Eyewear",
						"rate":21.50,
						"group":"Softline"
				},
				{
						"catagary":"Watches",
						"title":"Watches",
						"rate":17.50,
						"group":"Softline"
				},
				{
						"catagary":"Shoes",
						"title":"Shoes",
						"rate":13.00,
						"group":"Softline"
				},
				{
						"catagary":"Handbags",
						"title":"Handbags",
						"rate":12.50,
						"group":"Softline"
				},
				{
						"catagary":"Wallets",
						"title":"Wallets",
						"rate":16.00,
						"group":"Softline"
				},
				{
						"catagary":"Backpacks",
						"title":"Backpacks",
						"rate":3.00,
						"group":"Softline"
				},
				{
						"catagary":"Luggage",
						"title":"Luggage (excluding Wallets and Backpacks)",
						"rate":14.00,
						"group":"Softline"
				},
				{
						"catagary":"Fashion Jewellery",
						"title":"Fashion Jewellery",
						"rate":23.00,
						"group":"Softline"
				},
				{
						"catagary":"FineJewelleryunstuddedsolitaire",
						"title":"Fine Jewellery (unstudded and solitaire)",
						"rate":5.00,
						"group":"Softline"
				},
				{
						"catagary":"FineJewellerystudded",
						"title":"Fine Jewellery (studded)",
						"rate":8.00,
						"group":"Softline"
				},
				{
						"catagary":"FineJewelleryGoldCoins",
						"title":"Fine Jewellery (Gold Coins)",
						"rate":3.00,
						"group":"Softline"
				}
			];
			this.selected=this.data[0].category;
			//this.selectedData=this.data[0];
			this.selectedData={};
			this.selectedData.standardRate=this.data[0].standardRate;
			this.selectedData.shipingFee=30;
			this.selectedData.referralFee=0;
			this.selectedData.closingFee=0;
			this.selectedData.totalFeeCharged=0;
			this.selectedData.serviceTax=0;
			this.selectedData.totalCharge=0;
			this.selectedData.makingCharge=0;
  }

  selectData(d){
  	for(var i=0; i<this.data.length;i++){
  		if(this.data[i].category == d){
  			//this.selectedData=this.data[i].;
			this.selectedData.category=this.data[i].category;
			this.selectedData.title=this.data[i].title;
			this.selectedData.group=this.data[i].group;
			this.selectedData.standardRate=this.data[i].standardRate;
  		}
  	}
  	this.calculateReferralFee();
  	//this.selectedData=d;
  }

  calculateReferralFee(){
	  if(this.selectedData.productPrice){
		this.selectedData.referralFee=(this.selectedData.standardRate/100)*this.selectedData.productPrice;
	  }
  	
  	this.calculateClosingFee();
  	this.calculateTotalFeeCharged();
  	this.calculateServiceTax();
  	this.calculateTotalCharge();
  	this.calculateMakingCharge();
  }

  calculateClosingFee(){
	if(this.selectedData.productPrice){
		if(this.selectedData.productPrice <= 250){
			this.selectedData.closingFee=10;
		}else if(this.selectedData.productPrice > 250 && this.selectedData.productPrice <= 500){
			this.selectedData.closingFee=15;
		}else if(this.selectedData.productPrice > 500 && this.selectedData.productPrice <= 1000){
			this.selectedData.closingFee=20;
		}else if(this.selectedData.productPrice > 1000){
			this.selectedData.closingFee=40;	
		}
	}
  	
  }

  calculateTotalFeeCharged(){
	  if(this.selectedData.referralFee && this.selectedData.closingFee && this.selectedData.shipingFee){
		this.selectedData.totalFeeCharged=this.selectedData.referralFee+this.selectedData.closingFee+parseFloat(this.selectedData.shipingFee);
	  }
  }

  calculateServiceTax(){
	  if(this.selectedData.totalFeeCharged){
		this.selectedData.serviceTax=(0.15*this.selectedData.totalFeeCharged).toFixed(2);
	  }
  }

  calculateTotalCharge(){
	  if(this.selectedData.totalFeeCharged && this.selectedData.serviceTax){
		this.selectedData.totalCharge=parseFloat(this.selectedData.totalFeeCharged)+parseFloat(this.selectedData.serviceTax);
	  }
  	
  }

  calculateMakingCharge(){
	  if(this.selectedData.productPrice && this.selectedData.totalCharge){
		this.selectedData.makingCharge=parseFloat(this.selectedData.productPrice)-parseFloat(this.selectedData.totalCharge);
	  }
  	
  }

}
