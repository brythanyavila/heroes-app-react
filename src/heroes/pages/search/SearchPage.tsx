import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';

const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descrube, explora y administra super héroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />
    </>
  );
};

export default SearchPage;
