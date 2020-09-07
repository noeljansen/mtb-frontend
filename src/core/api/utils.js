import { API } from '../../config'

/* 

Function: getBreadCrumbs
Descritption: This method receives an array of advert's ancestor names and returns
an array of breadcrumb URLs to each ancestor category

*/
export const getBreadCrumbs = (ancestors) => {
    var breadCrumbURLs = []
    var i
    const baseURL = 'c/'
    for (i = 0; i < ancestors.length; i++) {
        if (i == 0) {
            breadCrumbURLs[i] = baseURL + ancestors[i]
        } else {
            breadCrumbURLs[i] = breadCrumbURLs[i - 1] + '/' + ancestors[i]
        }
    }
    return breadCrumbURLs
}