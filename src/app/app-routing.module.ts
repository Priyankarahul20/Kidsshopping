import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { BoyComponent } from './all/boy/boy.component';
import { GirlComponent } from './all/girl/girl.component';
import { BabygirlComponent } from './babygirl/babygirl.component';
import { BodysafetyComponent } from './bodysafety/bodysafety.component';
import { BoyfashionComponent } from './boyfashion/boyfashion.component';
import { CategoriesComponent } from './categories/categories.component';
import { FoodfeedingComponent } from './foodfeeding/foodfeeding.component';
import { FootwearComponent } from './footwear/footwear.component';
import { FootwearbComponent } from './footwearb/footwearb.component';
import { FunlearningComponent } from './funlearning/funlearning.component';
import { GirlfashionComponent } from './girlfashion/girlfashion.component';
import { HomeComponent } from './home/home.component';
import { HomedecorationComponent } from './homedecoration/homedecoration.component';
import { HomelivingComponent } from './homeliving/homeliving.component';
import { JeansscartsComponent } from './jeansscarts/jeansscarts.component';
import { JeansscartsbComponent } from './jeansscartsb/jeansscartsb.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MomentsComponent } from './moments/moments.component';
import { OneyearComponent } from './oneyear/oneyear.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RainwearComponent } from './rainwear/rainwear.component';
import { ShopallComponent } from './shopall/shopall.component';
import { ShopallbComponent } from './shopallb/shopallb.component';
import { ShopalloneplusComponent } from './shopalloneplus/shopalloneplus.component';
import { ShopbyoccationComponent } from './shopbyoccation/shopbyoccation.component';
import { ShopbyoccationbComponent } from './shopbyoccationb/shopbyoccationb.component';
import { SigininComponent } from './siginin/siginin.component';
import { SignupComponent } from './signup/signup.component';
import { SixplusyearComponent } from './sixplusyear/sixplusyear.component';
import { SixyearComponent } from './sixyear/sixyear.component';
import { WinterwearComponent } from './winterwear/winterwear.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'moments',component:MomentsComponent},
  // {path:'all',component:AllComponent,children:[
  //   {path:'girl',component:GirlComponent},
  //   {path:'boy',component:BoyComponent}
  // ]},
  {path:'siginin',component:SigininComponent},
  {path:'signup',component:SignupComponent},
  {path:'oneyear',component:OneyearComponent},
  {path:'sixyear',component:SixyearComponent},
  {path:'sixplusyear',component:SixplusyearComponent},
  {path:'babygirl',component:BabygirlComponent},
  {path:'shopall',component:ShopallComponent},
  // {path:'girlfashion',component:GirlfashionComponent},
  {path:'boyfashion',component:BoyfashionComponent},
  {path:'bodysafety',component:BodysafetyComponent},
  {path:'funlearning',component:FunlearningComponent},
  {path:'foodfeeding',component:FoodfeedingComponent},
  {path:'homeliving',component:HomelivingComponent},
  {path:'shoppalloneplus',component:ShopalloneplusComponent},
  {path:'homedecoration',component:HomedecorationComponent},
  {path:'kitchen',component:KitchenComponent},
  {path:'shopbyoccation',component:ShopbyoccationComponent},
  {path:'jeansscarts',component:JeansscartsComponent},
  {path:'jeansscartsb',component:JeansscartsbComponent},
  {path:'footwear',component:FootwearComponent},
  {path:'winterwear',component:WinterwearComponent},
  {path:'rainwear',component:RainwearComponent},
  {path:'footwearb',component:FootwearbComponent},
  {path:'jeansscartsb',component:JeansscartsbComponent},
  {path:'shopbyoccationb',component:ShopbyoccationbComponent},
  {path:'shopallb',component:ShopallbComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
