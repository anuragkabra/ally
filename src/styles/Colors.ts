export const Colors = {
  theme: "#7561dd",
  background: "#dddddd",
  white: "#FFFFFF",
  black: "#000000",
  text: {
    white: "#FFFFFF",
    regular: "#000000",
    gray: "#444444"
  },
};

export enum Category {
  Administration = "Administration",
  Company = "Company",
  CustomerSuccess = "Customer Success",
  Design = "Design",
  Engineering = "Engineering",
  Finance = "Finance",
  Marketing = "Marketing",
  People = "People",
  ProductManagement = "Product Management",
  Sales = "Sales",
}

export const getCategoryColors = (category: String) => {
  switch (category) {
    case Category.Administration:
      return "#C23B23"
    case Category.Company:
      return "#EB6662"
    case Category.CustomerSuccess:
      return "#EADA52"
    case Category.Design:
      return "#03C03C"
    case Category.Engineering:
      return "#579ABE"
    case Category.Finance:
      return "#976ED7"
    case Category.Marketing:
      return "#976ED7"
    case Category.People:
      return "#203D85"
    case Category.ProductManagement:
      return "#997E8A"
    case Category.Sales:
      return "#AC6662"
    default:
      return "#7561dd"

  }
}
