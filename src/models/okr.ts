export interface OKRs {
  data: OKR[];
}

export interface OKR {
  id: string;
  category: string;
  title: string;
  metric_name: string;
  metric_start: string;
  metric_target: string;
  parent_objective_id: string;
  archived: string;
}

//customazied okrs
export interface CustomizedOKR {
  parent: OKR,
  childs: [OKR]
}