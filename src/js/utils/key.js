// export v4 renamed uuidv4
import { v4 as uuidv4} from 'uuid'


const keyGenerator = function (){
    const uniqueId = uuidv4().substr(0,8);
    
    return uniqueId;
}

export default keyGenerator