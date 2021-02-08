export type ItemKeys = Values.Question | Values.Type | Values.ConditionType | Values.ConditionValue;

export enum Values {
  Question = 'question',
  Type = 'type',
  ConditionType = 'conditionType',
  ConditionValue = 'conditionValue',
  Number = 'number',
}

export interface Item {
  id: string;
  parent: string;
  question: string;
  type: string;
  conditionType?: string;
  conditionValue?: string;
}

export interface Items extends Item {
  items?: Items[];
}
