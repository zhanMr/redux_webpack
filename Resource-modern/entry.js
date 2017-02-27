import React from 'react';
import ReactDom from 'react-dom';
import * as action from './action';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import Order from './order';
import log from './log';
import angular from 'angular';
import hotel from './hotel';
let createStoreWithLog = applyMiddleware(log)(createStore);
const store = createStoreWithLog(reducer);
function tests(){
}

//===========react redux=============================================================================================================================================================================

if(document.getElementById('box')) {
  store.subscribe(tests);
  store.dispatch(action.addTodo([1]));
  ReactDom.render(<Provider store={store}><Order/></Provider>,document.getElementById('box'));
  _.map([1,2,3], item => {
      console.log(item);
  })
}


//===========angluar=============================================================================================================================================================================
if(document.getElementById('angular')){
  document.getElementById('angular').innerHTML = `
      <div ng-app="app">
          <div class="body nofoot hotels_mod" ng-controller="hotel"><div hotel></div></div>
        </div>
  `;
  hotel.Data.ShowAllHotel = true;
  hotel.Data.HotelList.forEach((item, index) => {
    item.Status = index <= 5;
    console.log(item.Status);
  })
  const app = angular.module('app', []);
  app.directive('hotel', function () {
      return {
          template: `
              <div class="hotels_box">
                <div>
                  <div class="hotel" ng-repeat="item in hotel.HotelList | orderBy: 'HotelId'" ng-show="item.Status" ng-click="all()" ng-class-even="{'box2': true}">
                      <div class="hotels_base_info" data-id={{item.HotelId}}>
                          <h3>{{$index + 1}}.{{item.HotelName}}<span ng-bind="showImage(item)"></span></h3>
                          <divng-click="test($event)">
                            <img ng-if="showImage(item)" src={{item.ImageInfo.UrlList[0].Value}} />
                            <img ng-if="!showImage(item)" src='' alt="暂无图片"/>
                          </div>
                          <div>
                            <p><span><i>{{item.TScore}}</i></span>分</p><p><span>{{item.CommentTotalNumber}}</span>人点评</p>
                          </div>
                          <div class="hotels_desc"><p>高档型酒店</p>威基基</div>
                      </div>
                  </div>
                  <div ng-if="hotel.HotelList.length > 10" ng-show ="hotel.ShowAllHotel"  ng-click="showAllHotel()"><span class="show_more_btn">展开更多酒店</span></div>
                </div>
              </div>
              <div ng-controller="test"><span id="span" ng-click="changeText()">{{username}}</span> {{hex}}</div>
          `
      }
  });
  app.factory('Data', function(){
    return {
      name: ''
    }
  })
  app.service('$my', function(){
    this.my = function(arr){
       return arr.join('、');
    }
  })
  app.controller('test', ($scope, $timeout, $my, Data) => {
    $timeout(function(){
        console.log('xxx');
        $scope.username = 'who are you';
        $scope.hex = $my.my([1,2,3]);
      },1000);
      $scope.changeText = function(){
          $scope.username = "I'm JACK";
          Data.name = $scope.username;
      }
  })
  app.controller('hotel', ($scope, Data) => {
      $scope.showImage = function(item){
        return item.ImageInfo.UrlList && item.ImageInfo.UrlList.length > 0;
      }
      $scope.showAllHotel = function(){
        $scope.hotel.HotelList.forEach(item => {
          item.Status = true;
        })
        $scope.hotel.ShowAllHotel = false;
      }
      $scope.test = function($event){
        $event.stopPropagation();
        console.log('点击了图片');
        console.log($scope.username);
        console.log(Data.name);
      }
      $scope.all = function(){
        console.log('点击了整体');
      }
      $scope.hotel = hotel.Data;
  });
}
