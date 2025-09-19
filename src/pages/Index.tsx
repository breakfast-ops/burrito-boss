import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import BurritoCard from "@/components/BurritoCard";
import logo from "@/assets/logo.jpg";
import classicImage from "@/assets/burrito-classic.jpg";
import baconImage from "@/assets/burrito-bacon.jpg";
import premiumImage from "@/assets/burrito-premium.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleOrder = (burritoType: string, price: string) => {
    toast({
      title: "Order Placed! 🌯",
      description: `Your ${burritoType} (${price}) will be ready in 5-7 minutes!`,
      duration: 5000,
    });
  };

  const burritos = [
    {
      title: "The Classic",
      price: "$5.99",
      ingredients: ["Fresh Eggs", "Golden Potatoes", "Melted Cheese"],
      image: classicImage,
      description: "Our signature breakfast burrito with all the essentials for a perfect start to your day."
    },
    {
      title: "The Bacon Boost",
      price: "$9.99", 
      ingredients: ["Fresh Eggs", "Golden Potatoes", "Melted Cheese", "Crispy Bacon"],
      image: baconImage,
      description: "Everything you love about The Classic, elevated with crispy, smoky bacon strips."
    },
    {
      title: "The Premium",
      price: "$11.99",
      ingredients: ["Fresh Eggs", "Golden Potatoes", "Melted Cheese", "Crispy Bacon", "Fresh Avocado"],
      image: premiumImage,
      description: "The ultimate breakfast experience with creamy avocado completing this gourmet creation.",
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-red via-brand-warm to-brand-red">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="relative container mx-auto px-4 py-8">
          <nav className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="The Breakfast Stand"
                className="w-16 h-16 rounded-lg shadow-lg"
              />
              <div>
                <h1 className="text-2xl font-display font-bold text-white">The Breakfast Stand</h1>
                <p className="text-white/80 font-body">Fresh • Fast • Delicious</p>
              </div>
            </div>
            <Button variant="premium" size="lg" className="hidden md:block">
              📍 Find Us
            </Button>
          </nav>
          
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-float">
              Breakfast Burritos
              <span className="block text-brand-gold">Made Fresh Daily</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-body mb-8 max-w-2xl mx-auto">
              Choose your perfect breakfast burrito from our three signature options. 
              Made with farm-fresh ingredients and wrapped with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-white/80 font-body">🌯 Ready in 5-7 minutes</span>
              <span className="text-white/80 font-body">🥑 Fresh ingredients daily</span>
              <span className="text-white/80 font-body">☕ Coffee available</span>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Section */}
      <main className="relative -mt-20 z-10">
        <section className="container mx-auto px-4 pb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-white mb-4">
              Choose Your Perfect Burrito
            </h3>
            <p className="text-white/80 font-body text-lg">
              All burritos are made fresh to order with premium ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {burritos.map((burrito, index) => (
              <BurritoCard
                key={index}
                title={burrito.title}
                price={burrito.price}
                ingredients={burrito.ingredients}
                image={burrito.image}
                description={burrito.description}
                isPremium={burrito.isPremium}
                onOrder={() => handleOrder(burrito.title, burrito.price)}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-3xl font-display font-bold text-white mb-4">
              Hungry? We're Ready! 🔥
            </h4>
            <p className="text-white/80 font-body text-lg mb-8">
              Order now and taste why we're the neighborhood's favorite breakfast spot.
              Every burrito is made fresh when you order!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" className="text-lg px-8 py-6">
                📞 Call to Order: (555) 123-WRAP
              </Button>
              <Button variant="order" size="lg" className="text-lg px-8 py-6">
                📍 Visit Our Stand
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-white/60 font-body">
              © 2024 The Breakfast Stand • Made with ❤️ and fresh ingredients
            </p>
            <p className="text-white/40 font-body text-sm mt-2">
              Open Daily 6:00 AM - 11:00 AM • While supplies last
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;