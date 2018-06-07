import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { CognitiveService } from './services/cognitive.service';
import { UserService } from './services/user.service';
import { AzureHttpClient } from './services/azureHttpClient';
@NgModule({
    providers: [ AzureHttpClient, CognitiveService, UserService ],
    imports: [ HttpModule ]
})
export class CommonModule { }