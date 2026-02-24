
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  imageUrl: string;
}

export interface PlanFeature {
  id: string;
  text: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  tag?: string;
  features: PlanFeature[];
}
