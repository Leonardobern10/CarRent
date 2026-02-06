const styles = {
  div: "h-full w-1/2 max-lg:hidden",
  img: "rounded-lg",
};

type AboutImageProps = {
  carImage: string;
  alt: string;
};

export default function AboutImage({ carImage, alt }: AboutImageProps) {
  return (
    <div className={styles.div}>
      <img src={carImage} alt={alt} className={styles.img} />
    </div>
  );
}
