import {
    DataSource,
    DataSourceOptions,
    EntityManager,
    QueryRunner,
} from 'typeorm';

export interface TransactionFunction<Returned = any> {
    (manager: EntityManager): Promise<Returned>;
}

export default class Database {
    protected dataSource: DataSource;

    constructor(options: DataSourceOptions) {
        this.dataSource = new DataSource(options);
    }

    async initialize(): Promise<void> {
        this.dataSource = await this.dataSource.initialize();
    }

    async synchronize(): Promise<void> {
        await this.dataSource.synchronize();
    }

    getQueryRunner(): QueryRunner {
        return this.dataSource.createQueryRunner();
    }

    transaction<Returned = any>(
        callback: TransactionFunction<Returned>
    ): Promise<Returned> {
        return this.dataSource.transaction<Returned>(callback);
    }

    get manager() {
        return this.dataSource.manager;
    }
}
