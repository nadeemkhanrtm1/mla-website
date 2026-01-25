import Image from "next/image";

const storage: any = {
  "major-drainage-infrastructure-project": {
    main_image: "/interview_1.png",
    category: "Politics",
    title:
      "Major Drainage Infrastructure Project Implemented in Arambagh to Solve Waterlogging Crisis",
    descriptionHtml: `Under the leadership of MLA Susanta Ghosh, a major drainage infrastructure project worth approximately ₹27 lakh was implemented in the Arambagh region through the BJP-led Panchayat Samiti.
For several years, residents and traders in the local market area had faced severe waterlogging problems, especially during monsoon seasons. Poor drainage had caused damage to shops, disrupted daily life, and created health hazards. The new drainage system was designed to provide a permanent solution to this long-standing civic issue.
This initiative reflects a strong commitment to grassroots development, urban sanitation, and sustainable infrastructure. By prioritising essential civic amenities, the project aims to improve living conditions, strengthen local business activity, and enhance public health standards in the region.
`,
  },

  "youth-marathon-organised-to-promote-a-drug-free-and-healthy-society": {
    main_image: "/interview_2.png",
    category: "Politics",
    title:
      "Youth Marathon Organised to Promote a Drug-Free and Healthy Society",
    descriptionHtml: `On the occasion of National Youth Day, a large-scale Youth Marathon was organised in Khanakul under the guidance of MLA Susanta Ghosh, with the objective of promoting a drug-free, healthy, and disciplined youth community.
The marathon witnessed enthusiastic participation from young people across the region. Participants carried messages against drug abuse and encouraged physical fitness, discipline, and positive social values among youth.
The programme highlighted the importance of sports, awareness, and youth leadership in building a strong society. By engaging young citizens in such initiatives, the leadership aims to channel youth energy toward constructive social development and nation-building.
`,
  },

  "central-government-road-connectivity-initiative-for-rural-areas": {
    main_image: "/interview_3.png",
    category: "Politics",
    title:
      "Efforts to Improve Inter-District Road Connectivity with Central Government Support",
    descriptionHtml: `In a significant step toward regional infrastructure development, MLA Susanta Ghosh held discussions with the Union Minister for Road Transport and Highways regarding the improvement of road connectivity across three districts including Khanakul.
The proposed road projects are expected to enhance transportation efficiency, reduce travel time, and strengthen economic connectivity between rural and urban areas. Improved road infrastructure will benefit farmers, traders, students, and emergency services, and will also attract investment and economic activity.
Local residents expressed optimism and satisfaction following assurances from the Central Government. This initiative reflects strong coordination between state-level leadership and central authorities to accelerate development in the region.
`,
  },

  "model-education-and-child-development-centres": {
    main_image: "/interview_4.png",
    category: "Politics",
    title:
      "Local Child Development Centre Transformed into a Model Educational Institution",
    descriptionHtml: `A child development and education centre in Khanakul has been upgraded into a model learning institution, focusing on early childhood education, nutrition, and holistic development.
The upgraded centre provides improved infrastructure, better learning materials, and a supportive environment for children. The initiative aims to strengthen early education and ensure that children in rural areas receive quality learning opportunities from an early age.
This transformation demonstrates a strong commitment to education, child welfare, and social development. Investing in early childhood education is a key pillar for building a knowledgeable, skilled, and empowered future generation.
`,
  },

  "bjp-organisational-strength-and-victory-celebration": {
    main_image: "/interview_5.png",
    category: "Politics",
    title:
      "BJP Victory Celebration Strengthens Grassroots Organisation in Arambagh",
    descriptionHtml: `Following the Bharatiya Janata Party’s electoral victory in Delhi, party workers and supporters in Arambagh organised a celebration programme to mark the success and strengthen organisational morale.
The event showcased the growing enthusiasm and unity among BJP workers and supporters. Such programmes play an important role in motivating party cadres, strengthening grassroots organisation, and reinforcing commitment toward public service and democratic values.
The celebration reflected the increasing political awareness and participation of citizens in national politics and highlighted the organisational strength of the party in the region.
`,
  },
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = await params; // string | string[]
  const slugKey = slug?.join(",");
  const details = storage[slugKey as any] as any;

  return (
    <section className="container mx-auto mt-12">
      <div className="inline-flex justify-start items-center gap-6 mb-4">
        <div className="px-3 py-1.5 bg-[#ff6600]/10 rounded-[19px] flex justify-center items-center gap-2.5">
          <div className="text-center justify-center text-[#ff6600] text-base font-semibold font-['Mukta'] leading-4">
            {details?.category}
          </div>
        </div>
      </div>

      <h1 className="justify-center text-[#1a1a1a] text-[44px] font-semibold font-['Open_Sans'] mb-8">
        {details?.title}
      </h1>

      <p
        className="self-stretch justify-center text-[#364153]/80 text-lg font-normal font-['Mukta'] leading-6.5 mb-15"
        dangerouslySetInnerHTML={{ __html: details?.descriptionHtml }}
      ></p>

      <div className="mt-15 mb-30">
        <Image
          src={details?.main_image}
          alt="Main Image"
          width={100}
          height={100}
          className="w-full h-full"
          unoptimized
        />
      </div>
    </section>
  );
}
