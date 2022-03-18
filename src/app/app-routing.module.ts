import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';

import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'quiz',component:QuizComponent},
  {path:'question',component:QuestionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
