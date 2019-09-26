import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoModelShowService {
  modelYc = false;
  phoneErrModel = false;
  constructor() { }
   modelYcFunction() {
        this.modelYc = !this.modelYc;
    }

    modelYcFunctionFalse() {
        this.modelYc = false;
    }
    phoneErrModelFunction() {
        this.phoneErrModel = !this.phoneErrModel;
    }

    phoneErrModelFunctionFalse() {
        this.phoneErrModel = false;
    }
}
