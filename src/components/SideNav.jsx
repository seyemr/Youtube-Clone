import { categories } from "../utlis/contants";
import { useContext } from "react";
import { YoutubeContext } from "../context/YoutubeContext";

const SideNav = () => {
  // contexte abone olma 
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
    
  return (
    <nav className="flex flex-col gap-7 mt-8">
      {categories.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <>
          <div
          // seçilen kategoryi contexte gönderme
            onClick={() => setSelectedCategory(item.name)}
            // eğerki seçilen kategorinin ismini ekrana bastımızda onu mavi yap
            className={`${selectedCategory === item.name && "bg-blue-600"} 
            flex items-center gap-2 p-2 py-3 text-lg cursor-pointer hover:bg-gray-800 `}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {/* eğerki objenin divider değeri true ise ekrana bir çizgi bas */}
          {item.divider && <hr />}
        </>
      ))}
    </nav>
  );
};

export default SideNav;
