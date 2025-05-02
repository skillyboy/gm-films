import Image from 'next/image';

interface Equipment {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  availability: boolean;
}

interface EquipmentCardProps {
  equipment: Equipment;
}

const EquipmentCard = ({ equipment }: EquipmentCardProps) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={equipment.image}
          alt={equipment.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase ${
          equipment.availability ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {equipment.availability ? 'Available' : 'Unavailable'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{equipment.name}</h3>
        <p className="text-gray-300 mb-4">{equipment.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">${equipment.dailyRate} <span className="text-sm text-gray-400">/ day</span></p>
            <p className="text-sm text-gray-400">${equipment.weeklyRate} / week</p>
          </div>
          <button 
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              equipment.availability
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!equipment.availability}
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;