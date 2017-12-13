//生成数独解决方案
const Toolkit = require('./toolkit')

class Generator {
    generate() {
        this.matrix = Toolkit.matrix.makeMatrix();

        this.orders = Toolkit.matrix.makeMatrix()
        ,map(row => row.map((v,i) => i))
        .map(row =>Toolkit.matrix.shuffle(row));
        for(let n = 1; n <=9; n++) {
            this.fillNumber(n);
        }
    }

    fillNumber(n) {
        this.fillRow(n, 0);
    }

    fillRow(n, rowIndex) {
        //当前行填写n成功，递归调用fillRow()在下一行填写
        if(rowIndex > 8) {
            return true;
        }

        const row = this.matrix[rowIndex];
        const orders = this.orders[rowIndex];

        for (let i = 0; i <9; i++) {
            const colIndex = orders[i];
            if(row[colIndex]) {
                continue;
            }

            //检查这个位置是否可以填写n
            if(!Toolkit.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
                continue;
            }

            row[colIndex] = n;

            if(!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0;
                continue;
            }
            return true;
        }
        return false;
    }
}