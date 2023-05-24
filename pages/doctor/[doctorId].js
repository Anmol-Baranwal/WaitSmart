import { useRouter } from "next/router";

const Doctor = () => {
  const router = useRouter();

  return <div>Doctor Dynamic page {router.query.doctorId} </div>;
};

export default Doctor;
