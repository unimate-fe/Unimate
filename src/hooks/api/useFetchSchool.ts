import {useQuery} from 'react-query';
import {fetchUniversity} from '@screens/RegisterSchoolScreen/api/fetchSchool';

export const useFetchUniversity = () => {
  return useQuery('university', fetchUniversity);
};
