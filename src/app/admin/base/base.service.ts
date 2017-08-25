import {Observable} from "rxjs/Observable";
import {Result} from "../../model/Result";
/**
 * Created by jamescsh on 8/22/17.
 */
export class BaseService {

  public extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  public handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
