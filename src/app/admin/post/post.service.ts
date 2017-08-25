import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import {Article} from "../../model/Article";
import {BaseService} from "../base/base.service";
import {Observable} from "rxjs/Observable";
import {Result} from "../../model/Result";
/**
 * Created by jamescsh on 8/22/17.
 */
@Injectable()
export class PostService extends BaseService{

  constructor(private http: Http) {
    super();
  }

  /**
   * 发表文章
   */
  public postArticle(article: Article): Observable<Result>{
    let url: string = "";
    // let headers = new Headers({ 'Content-Type': 'application/json' }); //其实不表明 json 也可以, ng 默认好像是 json
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(url, {article})
      .map(response => {
        let result: Result = JSON.parse(response.json());
        return result;
      })
      .catch(this.handleErrorObservable);
  }
}
