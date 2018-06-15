export class MathHelper {

    public static GCD(a: number, b: number): number {
        if (b === 0) {
            return a;
        } else {
            return MathHelper.GCD(b, a % b);
        }
    }

}
