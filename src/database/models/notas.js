module.exports = function(sequelize, dataTypes) {
    let alias = 'Notitas'
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            
        },
        titulo: {
            type: dataTypes.STRING(60),
            notNull: true,            
        },
        texto: {
            type: dataTypes.STRING(),
            notNull: true,
                        
        }
    }

    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true,
        //paranoid: true
    }

    const Notas = sequelize.define(alias, cols, config);
    return Notas;
}