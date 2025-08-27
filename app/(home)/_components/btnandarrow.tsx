import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface BtnAddArrowProps {
    classname: string;
}

const BtnAndArrow:React.FC<BtnAddArrowProps> = ({classname}) => {
  return (
    <Button className={`flex flex-row gap-x-4 items-center text-white rounded-full font-semibold transition ${classname}`}>
      <span className="font-jost">Commencer l’aventure</span>
      <ArrowRight className="text-white w-6 h-6 lg:w-7 lg:h-7" />
    </Button>
  );
};

export default BtnAndArrow;
