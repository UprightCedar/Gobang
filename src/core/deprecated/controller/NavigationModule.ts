/**
 * @module NavigationModule
 * @description 导航模块
 */
export module NavigationModule{
    /**
     * @class Location
     * @description 控制浏览器地址
     */
    export class Location{
        /**
         * @method reload
         * @description 重新加载页面
         * @static
         */
        static reload() {
            window.location.reload();
        };
        /**
         * @method forward
         * @description 跳转页面
         * @param url {string} 页面地址
         * @param blank {boolean} 是否是新页面
         * @static
         */
        static forward(url:string, blank:boolean){
            if (!blank) {
                window.location.href = url;
            } else {
                window.open(url);
            }
        }
    }
    /**
     * @class Query
     * @description 获取网页参数
     */
    export class Query{
        /**
         * @method getQueryString
         * @description 获取参数
         * @param name 参数名称
         * @return {string} 参数
         * @static
         */
        static getQueryString(name:string) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            let r = window.location.search.substr(1).match(reg);
            if (r !== null)return decodeURI(r[2]);
            return '';
        };

        /**
         * @method boundInputWithQueryString
         * @description 绑定Input和查询参数
         * @param inputId
         * @param queryName
         * @static
         */
        static boundInputWithQueryString(inputId:string, queryName?:string) {
            if(!queryName){
                queryName = inputId;
            }
            if (this.getQueryString(queryName).length) {
                (<HTMLInputElement>document.getElementById(inputId)).value =
                    this.getQueryString(queryName);
            }
        };
    }
}