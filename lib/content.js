import { DeliveryClient } from "@kentico/kontent-delivery";

const client = new DeliveryClient({
  projectId: process.env.KONTENT_PROJECT_ID,
});

function parseHomePageData(data) {
  return {
    title: data.title.value,
    logo: data.logo.value[0].url,
    mainPhoto: data.main_photo.value[0].url,
  };
}

export async function getHomePageData() {
  const data = await client
    .items()
    .type("homepage")
    .toPromise()
    .then((result) => result.getFirstItem());
  return parseHomePageData(data);
}
