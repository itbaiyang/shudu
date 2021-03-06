/**
 * 矩阵和数组相关工具
 */
const matrixToolkit = {

    makeRow(v = 0) {
        const array = new Array(9);
        array.fill(v);
        return array;
    },

    makeMatrix(v = 0) {
        return Array.from({ length: 9 }, () => this.makeRow(v))
    },

    // fisher-yates 洗牌算法
    shuffle(array) {
        const endIndex = array.length - 2;
        for (let i = 0; i <= endIndex; i++) {
            const j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    checkFilable(matrix, n, rowIndex, colIndex) {
        const row = matrix[rowIndex];
        const column = this.makeRow().map((v,i) => matrix[i][colIndex]);
        const { boxIndex } = boxToolkit.convertToBoxIndex(rowIndex,colIndex);
        return true;
    }
};

/**
 * 宫坐标系工具
 */
const boxToolkit = {

    convertToBoxIndex(rowIndex,colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        };
    },

    convertFromBoxIndex(boxIndex,cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        };
    }
}
//工具集
module.exports = class Toolkit {

    /**
     * 矩阵和数组相关工具
     */
    static get matrix() {
        return matrixToolkit;
    }

    /**
     * 宫坐标系工具
     */
    static get box() {
        return boxToolkit;
    }
} 