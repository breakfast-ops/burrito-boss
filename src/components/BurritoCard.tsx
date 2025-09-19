import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BurritoCardProps {
  title: string;
  price: string;
  ingredients: string[];
  image: string;
  description: string;
  isPremium?: boolean;
  onOrder: () => void;
}

const BurritoCard = ({ title, price, ingredients, image, description, isPremium, onOrder }: BurritoCardProps) => {
  return (
    <Card className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 ${
      isPremium ? "ring-2 ring-brand-gold animate-glow" : "hover:shadow-[var(--shadow-warm)]"
    }`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-display font-bold ${
            isPremium 
              ? "bg-gradient-to-r from-brand-gold to-secondary text-foreground" 
              : "bg-brand-red text-white"
          }`}>
            {price}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground font-body">{description}</p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-display font-semibold text-foreground">What's Inside:</h4>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-muted rounded-full text-sm font-body text-muted-foreground"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          variant={isPremium ? "premium" : "order"}
          size="lg"
          onClick={onOrder}
          className="w-full text-lg py-6"
        >
          Order Now • {price}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BurritoCard;