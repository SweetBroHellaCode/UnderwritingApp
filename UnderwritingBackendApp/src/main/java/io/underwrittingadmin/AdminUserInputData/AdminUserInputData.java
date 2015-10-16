package io.underwrittingadmin.AdminUserInputData;

/**
 * Created by emaron on 10/16/15.
 */
public class AdminUserInputData {


    private int adminId;
    private int ageMax;
    private int ageMin;
    private int assetAmount;
    private int creditScoreMax;
    private int creditScoreMin;
    private int debtMax;
    private int debtMin;
    private int incomeMax;
    private int incomeMin;

    AdminUserInputData(int adminId, int ageMin, int ageMax, int creditScoreMin, int creditScoreMax, int debtMin, int debtMax, int incomeMin, int incomeMax, int assetAmount) {

        this.adminId = adminId;
        this.ageMin = ageMin;
        this.ageMax = ageMax;
        this.assetAmount = assetAmount;
        this.creditScoreMin = creditScoreMin;
        this.creditScoreMax = creditScoreMax;
        this.debtMin = debtMin;
        this.debtMax = debtMax;
        this.incomeMin = incomeMin;
        this.incomeMax = incomeMax;
        

    }
}


