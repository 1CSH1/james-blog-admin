import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import {BaseService} from "../base/base.service";
import {Observable} from "rxjs/Observable";
import {Tag} from "../../model/Tag";
import "rxjs/add/operator/catch";

/**
 * Created by jamescsh on 8/22/17.
 */

@Injectable()
export class TagService extends BaseService{

  public url: string = "assets/data/tags.json"

  constructor(private http: Http) {
    super();
  }

  /**
   * 获取所有标签
   */
  public getAllTags(): Observable<Tag[]>{
    let params = new URLSearchParams();
    return this.http
      .get("assets/data/tags.json", {search: params})
      .map(response => {
        let result = response.json();
        return result;
      })
      .catch(this.handleErrorObservable);
  }
}
