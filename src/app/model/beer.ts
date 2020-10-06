export class Beer {
  id: number;
  name: string;
  firstBrewed: string;
  ibu: number;
  description: string;
  imageUrl: string;

  constructor(id: number, name: string, firstBrewed: string, ibu: number, description: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.firstBrewed = firstBrewed;
    this.ibu = ibu;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
