import Axios from 'axios';

export async function loadFile(path: string): Promise<string> {
  return Axios.get(path).then(res => res.data);
}
