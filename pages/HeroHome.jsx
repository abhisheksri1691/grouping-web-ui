import Link from "next/link";
function HeroHome() {


  return (
    <section className="relative">

      <div className="max-w-full mx-auto px-4 sm:px-6 bg-gradient-to-r from-slate-300 to-teal-300">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-20 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4 text-sky-900" >Make your business<p><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-slate-800">wonderful</span></p></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-xl text-gray-900 mb-8" >Grow your business more with new technology softwares, we provide not only all IT solutions, provide trust and beautiful bonding with out client, set it up once, and get beautiful results forever.</p>
            </div>
          </div>
        </div>

      </div>
      <h1 className="text-center mt-5 text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 text-sky-900" >Expolre Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-slate-800">Services</span></h1>
 <div className=" md:flex space-x-4 mr-6 ml-3">
 <Link href="/web-development">
  <div className="card-zoom">
  <div className="max-w-sm rounded overflow-hidden shadow-lg mt-8 ml-6">
  <img className="w-full h-85"  src="/webdev.jpg" alt="Sunset in the mountains"/> 
  <div className="px-6 py-4">
    <div className=" font-bold text-xl mb-2">Web Development</div>
    <p className="text-gray-700 text-base">
   
Transform your vision into a stunning reality with our professional web development services. We create responsive, user-friendly websites that captivate your audience and drive business growth. Let us bring your online presence to life and make a lasting impression.  </p>
  </div>
  
  </div>
</div>
</Link>
<Link href="/mobile-development">
<div className="card-zoom">

<div className="max-w-sm rounded overflow-hidden shadow-lg mt-8 ml-6">
  <img className="w-full h-85"  src="/mobile.jpg" alt="Sunset in the mountains"/> 
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Mobile Development</div>
    <p className="text-gray-700 text-base">
    Unlock the power of mobile technology with our expert mobile development services. We create intuitive and high-performance mobile apps for iOS and Android platforms, helping businesses engage users and drive growth. Let's bring your ideas to life on the small screen. </p>
  </div>
 
</div>

</div>
</Link>
<Link href="/seo">
<div className="card-zoom">
<div className="max-w-sm rounded overflow-hidden shadow-lg mt-8 ml-6">
  <img className="w-full h-85"  src="/seo.jpg" alt="Sunset in the mountains"/> 
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Search Engine Optimization</div>
    <p className="text-gray-700 text-base">
      
Boost your online visibility and drive organic traffic with our strategic SEO services. We optimize your website, analyze keywords, and implement proven techniques to improve search engine rankings. Get ready to outrank your competition and attract more customers to your site. </p>
  </div>
  
</div>
</div>
</Link>
<Link href="/digital-marketing">
<div className="card-zoom">
<div className="max-w-sm rounded overflow-hidden shadow-lg mt-8 ml-6">
  <img className="w-full h-85"  src="/analytics.jpg" alt="Sunset in the mountains"/> 
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Social Media Optimization</div>
    <p className="text-gray-700 text-base">
    Amplify your brand's presence and engage with your target audience through our strategic SMO (Social Media Optimization) services. We create compelling content, manage social media platforms, and drive meaningful interactions to enhance your brand's visibility and generate valuable leads.   </p>
  </div>
</div>
</div>
</Link>
</div>
    </section>
  );
}

export default HeroHome;