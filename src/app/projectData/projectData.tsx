type Project = {
  id: number;
  title: string;
  image: string;
  price: string;
  size: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Charcuterie Board",
    image: "/images/IMG_6860.jpeg",
    price: "From $80",
    size: '12" x 18"',
    description:
      "This custom wood and resin chacuterie board can be made of maple, walnut, or hickory.",
  },
  {
    id: 2,
    title: "End Grain Butcher Block",
    image: "/images/endgrainboard.jpg",
    price: "From $200",
    size: '24" x 24"',
    description:
      "This is a custom cutting board made with the end grains of walnut, maple, and/or hickory. The process is a very long and tedious one, but in the end it makes for an amazing finished piece.",
  },
  {
    id: 3,
    title: "Decorative Mountains",
    image:
      "https://i.etsystatic.com/18772075/r/il/0574a5/2822643179/il_794xN.2822643179_96kv.jpg",
    price: "From $20",
    size: 'These can range from 8" tall to 16" tall',
    description:
      "The mountains are calling, and you must go! Perfect for any mantle, shelf, or end table. These can be customized in just about any color and custom text can be engraved as well.",
  },
  {
    id: 4,
    title: "Coffee Table",
    image:
      "https://i.etsystatic.com/17590921/r/il/5c8f56/1834425387/il_1140xN.1834425387_cfda.jpg",
    price: "From $450",
    size: '48" x 24"',
    description:
      "This beautiful custom coffee table can be made out of maple, wlanut, oak, or cherry, and polished to a mirror shine. It will become the centerpiece of any room you choose to put it in.",
  },
  {
    id: 5,
    title: "Maple Cutting Board",
    image: "/images/IMG_6865.jpeg",
    price: "$40",
    size: '8" x 14"',
    description:
      "This board is made out of a solid piece of maple and includes a handle for easy manuevering. It can be ingraved with just about anything you'd like.",
  },
  {
    id: 6,
    title: "Cheese Board",
    image: "/images/IMG_6859.jpeg",
    price: "$25",
    size: '5" x 7"',
    description:
      "These boards are perfect for displaying your favorite fancy cheeses. Made of maple, they can be custom engraved with just about anything you want!",
  },
];
