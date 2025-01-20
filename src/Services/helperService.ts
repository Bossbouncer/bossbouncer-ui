import { Label } from "@mui/icons-material";
export const getCompanies = async (
  word: string | undefined
): Promise<string[]> => {
  try {
    if (word) {
      const response = await fetch(
        `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${word}`
      );
      if (response.status !== 200) {
        throw new Error("Some issue with network call. Please try again!");
      }

      const data = await response.json();
      let companies = data.filter((eachCompany: any) =>
        eachCompany.name.toLocaleLowerCase().includes(word.toLocaleLowerCase())
      );
      //   return companies;
      return companies.map(
        (eachCompany: any, index: number) => eachCompany.name
      );
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};
