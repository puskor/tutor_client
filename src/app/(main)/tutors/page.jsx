import All_tutors from '@/components/tutors/All_tutors';
import { TutorData } from '@/lib/data';

const Tutor = async () => {
    const data = await TutorData();
    return (
        <div>
            <All_tutors data={data}/>
        </div>
    );
};

export default Tutor;