import { OKRs, CustomizedOKR, OKR } from "../models/okr";


// Created a function to make a list which will be helpful for the app to render the comoponent
// ideally we should not do such customization on the frontend but I think its only for assignment
// In real world frontend should be dumb of these things.
export const getCustomizedOKRs = (okrsObject: OKRs): [CustomizedOKR] => {

  let okrr: any = okrsObject.data.reduce((hash: any, obj: OKR) => {
    return Object.assign(hash, hash, { [obj.parent_objective_id]: (hash[obj.parent_objective_id] || []).concat(obj) })
  }, {});

  let cutomizedOKRs = okrr[""].map((item: OKR) => {
    let newItem: CustomizedOKR = {
      parent: item,
      childs: okrr[item.id]
    };
    newItem.parent = item;
    newItem.childs = okrr[item.id] ?? [];
    return newItem
  })
  return cutomizedOKRs

}