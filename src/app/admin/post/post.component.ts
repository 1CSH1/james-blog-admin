import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Tag} from "../../model/Tag";
import {Category} from "../../model/Category";
import {PostService} from "./post.service";
import {TagService} from "../tag/tag.service";
import {CategoryService} from "../category/category.service";
import {Article} from "../../model/Article";
import {Result} from "../../model/Result";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public checkModel:any = {left: false, middle: true, right: false};

  // public addclass = "btn-danger";

  public dangers: string[] = [];

  public tags: Tag[] = [];
  public categories: Category[] = [];
  // 自定义分类
  public category: string = "";
  // 自定义标签
  public tag: string = "";


  constructor(private toastr: ToastrService,
              private postService: PostService,
              private tagService: TagService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    // 获取所有标签
    this.tagService.getAllTags().subscribe(response => {
      this.tags = response["data"];
    });
    // 获取所有分类
    this.categoryService.getAllCategories().subscribe(response => {
      this.categories = response["data"];
      for (let i = 0; i < this.categories.length; i++) {
        this.dangers[i] = "";
      }
    });

  }

  save(event) {
    if (event.title == null || event.title == "") {
      this.toastr.error("标题不能为空", "错误");
      return ;
    }
    if (event.content == null || event.content == "") {
      this.toastr.error("内容不能为空", "错误");
      return ;
    }

    let article: Article = new Article();
    article.title = event.title;
    article.content = event.content;
    // 设置分类
    let categories: Category[] = [];
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].selected == true) {
        categories.push(this.categories[i]);
      }
    }
    if (this.category != null && this.category != "") {
      let categoriesAdd: string[] = this.category.split(";");
      for (let i = 0; i < categoriesAdd.length; i++) {
        let categoryAdd: Category = new Category();
        categoryAdd.name = categoriesAdd[i];
        categories.push(categoryAdd);
      }
    }
    if (categories == null || categories.length == 0) {
      this.toastr.error("分类不能为空", "错误");
      return ;
    }
    article.categories = categories;

    // 设置标签
    let tags: Tag[] = [];
    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i].selected == true) {
        tags.push(this.tags[i]);
      }
    }
    if (this.tag != null && this.tag != "") {
      let tagsAdd: string[] = this.tag.split(";");
      for (let i = 0; i < tagsAdd.length; i++) {
        let tagAdd: Tag = new Tag();
        tagAdd.name = tagsAdd[i];
        tags.push(tagAdd);
      }
    }
    if (tags == null || tags.length == 0) {
      this.toastr.error("标签不能为空", "错误");
      return ;
    }
    article.tags = tags;
    console.log(article);
    this.postService.postArticle(article).subscribe(result => {
      if (result.error = '0000') {
        this.toastr.info(result.message, "提示");
      } else {
        this.toastr.error(result.message, "错误");
      }
    })
  }

  clear() {
    this.category = "";
    this.tag = "";
  }
  /**
   * 设置选中分类时样色
   */
  selectCategory(category: Category) {
    if (category.selected == true) {
      category.selected = false;
      category.style = "";
    } else {
      category.selected = true;
      category.style = "btn-primary";
    }
  }

  /**
   * 设置选中标签时样色
   */
  selectTag(tag: Tag) {
    if (tag.selected == true) {
      tag.selected = false;
      tag.style = "";
    } else {
      tag.selected = true;
      tag.style = "btn-info";
    }
  }
}
