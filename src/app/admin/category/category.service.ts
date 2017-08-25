import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Category} from "../../model/Category";
import {BaseService} from "../base/base.service";
/**
 * Created by jamescsh on 8/22/17.
 */

@Injectable()
export class CategoryService extends BaseService{

  constructor(private http: Http) {
    super();
  }

  /**
   * 获取所有分类
   */
  getAllCategories() : Observable<Category[]>{
    let params = new URLSearchParams();
    return this.http
      .get("assets/data/categories.json", {search: params})
      .map(response => {
        let result = response.json();
        return result;
      })
      .catch(this.handleErrorObservable);
  }
}
