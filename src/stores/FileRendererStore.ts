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

const FileRendererStore = () => ({
  objects: [] as JsonObjectsArray,
  addObjects(objects: JsonObjectsArray) {
    this.objects = [...objects];
  },
});

export default FileRendererStore;
