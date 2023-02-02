/// <reference types="client" />

interface IForm {
  name: string;
  prompt: string;
  photo: string;
}

interface ICard { 
  name: string; 
  prompt: string; 
  photo: string;
}

interface IRenderCards {
  data: ICard[];
  title: string;
}

interface ICardProps {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
}

interface IFormFieldProps {
  labelName?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: any;
  handleChange?: (e: BaseSyntheticEvent) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
}