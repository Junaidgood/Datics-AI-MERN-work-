import { Injectable ,OnModuleInit , OnApplicationShutdown} from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    OnModuleInit(){
        this.isConnected = true;
        console.log('Database connected')
    }

    OnApplicationShutdown(signal : string){
      this.isConnected = false;
      console.log(`Database disconnected due to the app shutdown. signal ${signal}`)
    }

    getStatus(){
        return this.isConnected ? 'Connected' : 'Disconnected';
    }
}
