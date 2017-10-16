"use strict"

module.exports = function (sequelize, DataType) {
	var Category = sequelize.define ("Category" , {
		name: {
			allowNull : false,
			type: DataType.STRING (60),
			unique: true
		},
		slug: {
			allowNull : false,
			type: DataType.STRING (60),
			unique: true
		},
		description: DataType.STRING (200),
		isActive: {
			type: DataType.BOOLEAN,
			defaultValue: true
		}
	}, {
		defaultScope: {
			where: {
				isActive: true
			}
		},
			classMethods: {
			associate: function (models) {
				//Category.hasMany(models.Product);
			}
		}
		});
	return Category;
}
