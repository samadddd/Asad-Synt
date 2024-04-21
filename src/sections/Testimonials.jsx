import SectionHeading from "../ui/SectionHeading";

// This array would contay 8 objects, later on we would double it to make the slider infinite.

const fakeData = [
  {
    name: "Johan",
    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iM-4d4p1puJaJaTlPUuoIO90v0OWcqEGTD74xgAv1A&s",
    country: "Japan",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
  {
    name: "brownateilier",
    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e0LH-dC1NbzmVAquhhXkdPXISFI4KNIXdlp006z9wg&s",
    country: "The Eclipse",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
  {
    name: "Griffith",
    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTjqCPQNqzfJzbwKm8qYKv-HtFOw-vzZITlVKyhKp1A&s",
    country: "Steel Bagh",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
  {
    name: "Femto",
    pfp: "https://m.media-amazon.com/images/M/MV5BYmVlMjZjYWUtM2YxNC00MmNlLTllZjYtYWQyM2E5ODA5MjNkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    country: "Laari Adda",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
  {
    name: "Yujiro",
    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiTSTviO1gbIYunJYjU5Sa1OGr_nVxyVKkuoRtEtBNuhLq5UI",
    country: "New City",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
  {
    name: "Escanor",
    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_Tw7Sur30icvNlBmI6ddlFWqV3sYkDt0t6JIG0kniQ&s",
    country: "New City",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
  {
    name: "Krrish",
    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5aqCgMHnnus3OYtC0xTeEybHCt54lXHW7TIw9KcXJUEkc9GA75mYRMX3zhLfXmnPDaw&usqp=CAU",
    country: "New Delhi",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
  {
    name: "Bohemia",
    pfp: "https://i.pinimg.com/736x/c0/a6/7c/c0a67caf68d005aa764aa96f8a2728d2.jpg",
    country: "Kaali Denali",
    comment:
      "Eentire time of creation he communicated with me and ensured every one of my wants was completed. He can really make any type of design you want come to life. There is no one else I will go to or recommend for website services from now on.",
    rating: 5,
  },
];

// This is the array that would be used in the slider. It is the doubled version of the fakeData array.

const fakeReviews = [...fakeData, ...fakeData];

function Testimonials() {
  return (
    <section className="mt-36 md:mt-60 relative">
      <SectionHeading vanguard="TESTIMONIALS">WHAT CLIENT SAYS?</SectionHeading>
      <img
        src="glow.webp"
        alt="Glow Effect"
        className="absolute -z-10 left-1/2 -translate-x-1/2 translate-y-[-40%] "
      />
      <div className="testimonial_slides mt-0 md:mt-12">
        <div className="flex ">
          {fakeReviews.map((reviewData, index) => (
            <Card key={index} reviewData={reviewData} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ reviewData }) {
  const { name, pfp, country, comment, rating } = reviewData;
  return (
    <div
      className="text-paragraph bg-[#ffffff17] backdrop-blur-[28px] flex flex-col 
    px-5 600:px-6 py-5 600:py-8 min-w-[93vw] 600:min-w-[413px] rounded-lg mx-[15px]"
    >
      <p className="leading-5 600:leading-7 text-sm 600:text-base">{comment}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <img
            src={pfp}
            alt="Pfp"
            className="size-[40px] 600:size-[50px] rounded-full"
          />
          <div>
            <p className="font-medium text-white text-sm 600:text-base">
              {name}
            </p>
            <p className="text-[10px] 600:text-[12px]">{country}</p>
          </div>
        </div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-1.5">
      {new Array(5).fill(undefined).map((_, index) => (
        <img
          src={rating >= index + 1 ? "fullstar.svg" : "halfstar.svg"}
          key={index}
        />
      ))}
    </div>
  );
}

export default Testimonials;
