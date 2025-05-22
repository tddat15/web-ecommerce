import './styles.css'

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({label, title, highlight}) => {
  return (
    <>
      <div className="section-header">
        <div className="section-label">
          <span className="dot"/>
          <span>{label}</span>
        </div>

        <div className="section-title">
          {title} {highlight && <span>{highlight}</span>}
        </div>
      </div>
    </>
  );
};

export default SectionHeader;