export class StringUtils {
    
    static wordSeperate(str: string): string[] {
        return str.split(/[\W_]+/).map(a => a.toLowerCase())
    }

    static toCamelCase(str: string) {
        return this.wordSeperate(str).map((a, index) => {
            if (index > 0) {
                return a[0].toUpperCase() + a.slice(1);
            }
            else {
                return a;
            }
        }).join("");
    }
}