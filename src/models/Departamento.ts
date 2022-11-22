/* eslint-disable camelcase */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("Departamento")
class Departamento {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    descricao: string;

    @Column()
    centroDeCustos: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}

export default Departamento;
