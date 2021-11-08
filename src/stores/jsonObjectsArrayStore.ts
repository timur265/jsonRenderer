export type JsonObjectsArray = {
  id: string;
  isActive: boolean;
  picture: string;
  age: number;
  name: string;
  email: string;
  address: string;
  about: string;
  registered: string;
}[];

export const createJsonObjectsArrayStore = () => ({
  texts: [""],
  addText(text: string) {
    this.texts.push(text);
  },
  objects: [] as JsonObjectsArray,
  addObjects(objects: JsonObjectsArray) {
    this.objects = [...objects];
  },
  get textCount() {
    return this.texts.length;
  },
});
